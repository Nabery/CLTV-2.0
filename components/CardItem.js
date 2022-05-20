import React from "react";
import Image from "next/dist/client/image";

import {
  ChevronDownIcon,
  PlusIcon,
  DotsVerticalIcon,
  ChatAlt2Icon,
  XCircleIcon,
  PencilIcon,
} from "@heroicons/react/outline";
import { Draggable } from "react-beautiful-dnd";


function CardItem({ data, index, oIndex, handleDelete, defaultD}) {


  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-blue-100 rounded-md p-3 m-3 mt-0 last:mb-0"
        >
          <label
            className={'text-red-500 cursor-pointer text-2xl'}
          >
            {data.priority === 0
              ? defaultD
              : data.priority === 1
              ? "Medium Priority"
              : "High Priority"}
          </label>

          <h3 className="text-xl my-3 leading-1.6 text-black">{data.title}</h3>
          <div className="flex justify-between">
            <div className="flex space-x-2 items-center">
              <span className="flex space-x-1 items-center">
              </span>
            </div>
            <ul className="flex space-x-3">
              <li>
                  <XCircleIcon className="w-12 h-12 text-gray-500 cursor-pointer hover:text-red-500" onClick={
                    (e)=>handleDelete(oIndex, index)}/>
              </li>
            </ul>
          </div>
        </div>
        
      )}
    </Draggable>
  );
}

export default CardItem;
