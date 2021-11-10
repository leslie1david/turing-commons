window.onload = function () {
  $.getJSON(
    "https://api.zotero.org/groups/4441221/collections/ACN3AY7D/items?format=json",
    function (data) {
      var items = [];
      $.each(data, function (key, val) {
        if (val.data.title) {
          //Set note value
          let note = "";
          $.each(data, function (noteKey, noteVal) {
            if (noteVal.data.parentItem == val.data.key) {
              note = noteVal.data.note;
            }
          });

          //Set record title value
          let recordTitle = "";
          if (val.data.itemType !== "report") {
            recordTitle = val.data.publicationTitle;
          } else {
            recordTitle = val.data.institution;
          }

          //Set authors value
          var authors = CreateAuthorsString(
            val.data.creators.length,
            val.data.creators,
            val.data.date
          );

          //Set URL value
          var url = GenerateUrl(val.data.url, val.data.DOI, recordTitle);

          //Generate HTML string as array
          items.push(
            '<div class="card margin-top" id=\'' +
              "title_" +
              key +
              "'>" +
              '<div class="card-header">' +
              authors +
              "</div>" +
              '<div class="card-body">' +
              '<h5 class="card-title">' +
              val.data.title +
              "</h5>" +
              '<p class="card-text">' +
              note +
              "</p>" +
              '<a target="_blank" href=' +
              '"' +
              url +
              '"' +
              'class="btn btn-primary">' +
              "Read now" +
              "</a>" +
              "</div>" +
              "</div>"
          );
        }
      });

      //Render HTML
      $("<section/>", {
        class: "bibliography",
        html: items.join(""),
      }).appendTo(".container");
    }
  );
};

function CreateAuthorsString(noOfAuthors, creators, date) {
  var authorsString = "";

  if (noOfAuthors == 1) {
    authorsString =
      creators[0].lastName + ", " + creators[0].firstName + ". (" + date + ")";
  }

  if (noOfAuthors == 2) {
    authorsString =
      creators[0].lastName + " & " + creators[1].lastName + " (" + date + ")";
  }

  if (noOfAuthors > 2) {
    authorsString = creators[0].lastName + " et al. (" + date + ")";
  }

  return authorsString;
}

function GenerateUrl(url, doi, recordTitle) {
  if (!url) {
    url = "https://doi.org/" + doi;
  }

  if (!doi && !url) {
    url = "https://scholar.google.com/scholar?&q=" + recordTitle;
  }

  return url;
}
