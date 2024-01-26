const stripHtmlTags = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const descriptionAlignment = (wrapper) => {
  const alignmentClasses = [
    "ql-align-center",
    "ql-align-right",
    "ql-align-left",
    "ql-align-justify",
  ];

  alignmentClasses.forEach((className) => {
    wrapper.querySelectorAll(`.${className}`).forEach((element) => {
      const alignment = className.replace("ql-align-", "");
      element.style.textAlign = alignment;
    });
  });
};

const parseContent = (desc) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = desc;

  descriptionAlignment(wrapper);

  const listNodes = wrapper.querySelectorAll("ul, ol");
  listNodes.forEach((node) => {
    const listType = node.tagName.toLowerCase() === "ul" ? "disc" : "decimal";
    node.style.listStyleType = listType;
    node.className = "ml-[13.5px]";
  });

  return wrapper.innerHTML;
};

export { stripHtmlTags, parseContent };
