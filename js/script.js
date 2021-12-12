let allowDrop = (e) => {
  e.preventDefault();
};

let dragElement = (e) => {
  let id = e.target.id;
  e.dataTransfer.setData("id", id);
};

let dropElement = (e) => {
  let id = e.dataTransfer.getData("id");
  let dragElement = document.getElementById(id);
  e.target.append(dragElement);
};

let dropElementOS = (e) => {
  e.preventDefault();
  let rawFiles = e.dataTransfer.files;
  let files = [...rawFiles];

  files.forEach((file, index) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      let img = document.createElement("img");
      img.src = reader.result;
      img.classList.add("dragElement");
      img.id = `${Date.now()}${index}`;
      img.setAttribute("draggable", "true");
      img.setAttribute("ondragstart", "dragElement(event)");
      document.querySelector(".dropElementContainerOS").append(img);
    };
  });
};

document.querySelector("#Image").addEventListener("change", function (e) {
  e.preventDefault();

  let files = [...document.forms[0].elements[0].files];

  files.forEach((file, index) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      let img = document.createElement("img");
      img.src = reader.result;
      img.classList.add("dragElement");
      img.id = `${Date.now()}${index}`;
      img.setAttribute("draggable", "true");
      img.setAttribute("ondragstart", "dragElement(event)");
      document.querySelector("#imageWrapper").append(img);
    };
  });
});
