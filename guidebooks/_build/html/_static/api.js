//Updated URL
window.onload = function () {
  $.getJSON(
    "https://api.zotero.org/groups/4441221/collections/DA9HDLFS/items?format=json",
    function (data) {
      var fairnessItems = [];
      var explainabilityItems = [];
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

          var authors = "";

          if (val.data.authors) {
            //Set authors value
            authors = CreateAuthorsString(
              val.data.creators.length,
              val.data.creators,
              val.data.date
            );
          }

          //Set URL value
          var url = GenerateUrl(val.data.url, val.data.DOI, recordTitle);

          var tag = "";

          if (val.data.tags) {
            tag = val.data.tags[0].tag.toLowerCase();
          }

          console.log(tag);

          //Generate HTML string as array

          if (tag === "fairness") {
            fairnessItems.push(
              '<div class="" id=\'' +
                "title_" +
                key +
                "'>" +
                '<div class="">' +
                authors +
                "</div>" +
                '<div class="">' +
                '<h5 class="">' +
                val.data.title +
                "</h5>" +
                '<p class="">' +
                note +
                "</p>" +
                '<a target="_blank" href=' +
                '"' +
                url +
                '"' +
                'class="">' +
                "Read now" +
                "</a>" +
                "</div>" +
                "</div>"
            );
          }

          if (tag === "explainability") {
            explainabilityItems.push(
              '<div class="" id=\'' +
                "title_" +
                key +
                "'>" +
                '<div class="">' +
                authors +
                "</div>" +
                '<div class="">' +
                '<h5 class="">' +
                val.data.title +
                "</h5>" +
                '<p class="">' +
                note +
                "</p>" +
                '<a target="_blank" href=' +
                '"' +
                url +
                '"' +
                'class="">' +
                "Read now" +
                "</a>" +
                "</div>" +
                "</div>"
            );
          }
        }
      });

      //Render HTML
      $("<section/>", {
        class: "bibliography",
        html: fairnessItems.join(""),
      }).appendTo("#fairness-section");
      $("<section/>", {
        class: "bibliography",
        html: explainabilityItems.join(""),
      }).appendTo("#explainability-section");
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
