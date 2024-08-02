"use client";
import React, { useState } from "react";
import BannerImagePreview from "./BannerImagePreview";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEditStore } from "../store/ModalShow";

type EditBannerTemplateBsProps = {
  hideEdit: () => void;
  image: string;
  title: string;
  id: number;
  Description: string;
  button: string;
  clipImage: string;
};

function EditBannerTemplateBs({
  hideEdit,
  image,
  title,
  id,
  Description,
  button,
  clipImage,
}: EditBannerTemplateBsProps) {
  const AllclipPath = useEditStore((state) => state.AllclipPath);

  const [BGurl, setBGurl] = useState(clipImage);
  const [Title, setTitle] = useState(title);
  const [description, setdescription] = useState(Description);
  const [curbutton, setcurbutton] = useState(button);
  const [ClipPath, setClipPath] = useState(2);

  const data = useEditStore((state) => state.data);
  const setData = useEditStore((state) => state.setData);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setBGurl(reader.result as string);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const HandleClipChange = (e: string) => {
    setClipPath(Number(e));
  };

  const UpdateData = () => {
    const updatedData = {
      id: id,
      image: image,
      title: Title,
      description: description,
      button: curbutton,
      clipPath: AllclipPath[ClipPath],
      clipImage: BGurl,
    };
    const newData = data.map((item, index) =>
      index === id - 1 ? updatedData : item
    );

    setData(newData);
    hideEdit();
  };

  return (
    <div className="w-full h-[80vh] sm:h-[90vh] absolute bg-yellow-400 flex flex-col justify-evenly pb-3 sm:pb-1 ">
      <div className="w-full flex items-end justify-end p-[1vw] pr-[2vw]">
        <button onClick={hideEdit}>Close</button>
      </div>
      <div className="preview w-[95%]">
        <BannerImagePreview
          key={id}
          title={Title}
          image={image}
          id={id}
          Description={description}
          clipImage={BGurl}
          clipPath={AllclipPath[ClipPath]}
          button={curbutton}
        />
      </div>
      <div className="w-full flex pl-[1vw] pr-[1vw] flex-col gap-1 mt-3">
        <h1 className="text-[5vw] sm:text-[1.8vw]">Clipped Area Image</h1>
        <div className="w-full flex gap-2">
          <Input
            type="text"
            placeholder="ImageURL"
            onChange={(e) => {
              setBGurl(e.target.value);
            }}
          />
          <Input id="picture" type="file" onChange={handleFileChange} />
        </div>
      </div>
      <div className="w-full flex pl-[1vw] pr-[1vw] flex-col gap-1">
        <h1 className="text-[5vw] sm:text-[1.8vw]">Text</h1>
        <div className="w-full flex gap-2">
          <Input
            type="text"
            placeholder="Title (max 3-4 Word)"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Description (keep it short)"
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="w-full flex pl-[1vw] pr-[1vw] gap-[1vw]">
        <div className="w-1/2">
          <h1 className="text-[5vw] sm:text-[1.8vw]">Button</h1>
          <Input
            type="text"
            placeholder="Button"
            onChange={(e) => {
              setcurbutton(e.target.value);
            }}
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-[5vw] sm:text-[1.8vw]">ClipBackground</h1>
          <Select onValueChange={HandleClipChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select the Clip Shape" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Clipping Shape</SelectLabel>
                <SelectItem value="0">Circle</SelectItem>
                <SelectItem value="1">Triangle</SelectItem>
                <SelectItem value="2">Square</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full flex items-center justify-center pt-3">
        <button className="bg-green-600 w-1/3 rounded-xl" onClick={UpdateData}>
          <h2 className="text-[5vw] sm:text-[1.6vw] font-bold">Done!</h2>
        </button>
      </div>
    </div>
  );
}

export default EditBannerTemplateBs;
