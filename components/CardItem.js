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

function CardItem({ data, index, oIndex}) {
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
            className={`bg-gradient-to-r
              px-6 py-1 rounded text-white text-lg
              ${
                data.priority === 0
                  ? "from-blue-600 to-blue-400"
                  : data.priority === 1
                  ? "from-green-600 to-green-400"
                  : "from-red-600 to-red-400"
              }
              `}
          >
            {data.priority === 0
              ? "COMUNICA: " + oIndex
              : data.priority === 1
              ? "Medium Priority"
              : "High Priority"}
          </label>

          <h3 className="text-xl my-3 leading-6 text-blue-700">{data.title}</h3>
          <div className="flex justify-between">
            <div className="flex space-x-2 items-center">
              <span className="flex space-x-1 items-center">
                <PencilIcon className="w-6 h-6 cursor-pointer text-gray-500 hover:text-blue-500" />
              </span>

            </div>

            <ul className="flex space-x-3">
              <li>
                  <XCircleIcon className="w-10 h-10 text-gray-500 cursor-pointer hover:text-red-500" onClick={()=>{console.log()}}/>
              </li>
            </ul>
          </div>
        </div>
        
      )}
    </Draggable>
  );
}

export default CardItem;
