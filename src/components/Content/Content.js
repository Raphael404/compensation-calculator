import React from "react";
import image from "../../Assets/Images/Image.png";

const list = [
  { id: 1, title: "Tellus Ullamcorper Inceptos" },
  {
    id: 2,
    title: "Magna Condimentum",
    content: [
      { id: 3, title: "Mattis Tristique" },
      { id: 4, title: "Pharetra Pellentesque Dapibus" },
    ],
  },
  { id: 5, title: "Aenean Inceptos" },
  { id: 6, title: "Parturient Bibendum" },
];

const Content = () => {
  return (
    <div className="mr-100-0 lg:mr-unset">
      <div>
        <h1 className="mb-20-0 text-40-0 font-bold text-white">
          Quam Tristique Condimentum
        </h1>
        <p className="max-w-[800px] text-18-0 text-white">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.{" "}
          <span className="text-red underline">Curabitur blandit </span>tempus
          porttitor. Integer posuere erat a ante venenatis dapibus posuere velit
          aliquet. Vestibulum id ligula porta felis euismod semper.
        </p>
      </div>
      <div className="ml-10 mt-40-0 hidden justify-center lg:flex">
        <div className="max-w-[240px]">
          <img className=" max-w-[240px]" src={image} alt="content" />
        </div>
      </div>
      <div className="mt-40-0 flex justify-between">
        <div className="w-60-0 lg:w-unset">
          <div className="mb-5">
            <h2 className="mb-5 mb-20-0 text-32-0 font-bold text-white">
              Fringilla Euismod Adipiscing Ipsum
            </h2>
            <p className="max-w-[800px] text-18-0 text-white">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
              lacinia bibendum nulla sed.
            </p>
          </div>
          <div className="mt-20-0 text-18-0 text-white">
            {list.map((item) => (
              <>
                <div className="root-item flex items-center">
                  <div className="bullet mr-9-0 h-4-0 w-16-0"></div>
                  <li key={item.id}>{item.title}</li>
                </div>
                {item.content &&
                  item.content.map((item) => (
                    <div className="node-item flex items-center">
                      <div className="bullet mr-13-0 h-4-0 w-12-0"></div>
                      <li key={item.id}>{item.title}</li>
                    </div>
                  ))}
              </>
            ))}
          </div>
        </div>
        <div className="ml-10 lg:hidden">
          <div>
            <img src={image} alt="content" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
