import React from "react";
import Image from "next/dist/client/image";

import {
  XCircleIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import { Draggable } from "react-beautiful-dnd";


function CardItem({ data, index, oIndex, handleDelete, comms, handleComm}) {


  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-gradient-to-r from-sky-300 to-sky-400 rounded-md p-3 m-3 mt-0 last:mb-0"
        >
          <label className='text-red-500 text-2xl'> {comms}
          </label>

          <h3 className="text-2xl my-3 leading-1.6 text-white font-bold">{data.title}</h3>

          <div className="flex justify-between">
                  <PhoneIcon className="w-12 h-12 text-gray-500 cursor-pointer hover:text-blue-300" onClick={
                    (e)=> handleComm(oIndex, index)
                  }/>
                  <XCircleIcon className="w-12 h-12 text-gray-500 cursor-pointer hover:text-red-500" onClick={
                    (e)=>handleDelete(oIndex, index)}/>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default CardItem;