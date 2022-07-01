import Layout from "../components/Layout";
import Modal from "../components/Modal";
import {
  PlusCircleIcon,
} from "@heroicons/react/outline";
import CardItem from "../components/CardItem";
import BoardData from "../data/board-data.json";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

function createGuidId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default function Home() {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);
  const [showForm, setShowForm] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);
  const [showModal, setShowModal] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReady(true);
    }
    deletecall()
  }, []);

  const movecall = (data) => {
    fetch('https://cltv-2-0.vercel.app/api/moves', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const postcall = (data)=>{
      fetch('https://cltv-2-0.vercel.app/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }

  const patchcall = (data)=>{
    fetch('https://cltv-2-0.vercel.app/api/patch', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const deletecall = () => {
    fetch('https://cltv-2-0.vercel.app/api/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const putcall= (data) =>{
    fetch('https://cltv-2-0.vercel.app/api/put', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const onDragEnd = (re) => {
    if (!re.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    dragItem.feedback = boardData[re.destination.droppableId].stdFeedback
    setBoardData([...newBoardData]);
    movecall(
      { 
         destination: re.destination.droppableId,
         from: re.source.droppableId,
         index : re.destination.index,
         fromindex: re.source.index,
         items :[{id: dragItem.id, name : dragItem.title, feedback: dragItem.feedback}]
     }
    )
  };

  const handleDelete = (oIndex, index) => {
    boardData[(parseInt(oIndex))].items.splice(index, 1)
    let newBoardData = boardData;
    setBoardData([...newBoardData])
    const data = {'where': oIndex,'index': index}
    putcall(data)
  }

  const handleComm = (oIndex, index) => {
    setShowModal(true)
    setX(oIndex)
    setY(index)
  }

  const handleHnumber = (hNumber) => {
    let newBoardData = boardData
    boardData[x].items[y].feedback = "HIB " + hNumber;
    setBoardData([...newBoardData])
    patchcall({
      id: boardData[x].items[y].id,
      name: boardData[x].items[y].title,
      where: x,
      index:y,
      hnumber: hNumber,
    })
  }


  const onTextAreaKeyPress = (e) => {
    if (e.keyCode === 13) //Enter
    {
      const val = e.target.value;
      if (val.length === 0) {
        setShowForm(false);
      }
      else {
        const boardId = e.target.attributes['data-id'].value;
        const item = {
          id: createGuidId(),
          title: val,
          feedback: boardData[boardId].stdFeedback,
        }
        let newBoardData = boardData;
        newBoardData[boardId].items.push(item);
        setBoardData(newBoardData);
        setShowForm(false);
        e.target.value = '';
        postcall({
          where: boardId, 
          items: item,
        })
      }
    }
  }

  return (
    <Layout>
      <div className="flex flex-col h-screen">
        {/* Board columns */}
        {ready && (
          <DragDropContext onDragEnd={onDragEnd}>
            {showModal === true ? (
              <Modal setShowModal={setShowModal} handleHnumber={handleHnumber} />
            ) :
              (<></>)
            }
            <div className="grid grid-cols-6 gap-5 my-5">
              {boardData.map((board, bIndex) => {
                return (
                  <div key={board.name}>
                    <Droppable droppableId={bIndex.toString()}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <div
                            className={`bg-gray-100 rounded-md shadow-md
                            flex flex-col relative overflow-hidden
                            ${snapshot.isDraggingOver && "bg-green-100"}`}
                          >
                            <span
                              className="w-full h-1 bg-gradient-to-r bg-blue-400
                          absolute inset-x-0 top-0"
                            ></span>
                            <h4 className=" p-3 flex justify-between items-center mb-2">
                              <span className="text-2xl text-gray-600">
                                {board.name}
                              </span>
                            </h4>
                            <div className="overflow-y-auto overflow-x-hidden h-auto"
                              style={{ maxHeight: 'calc(100vh - 200px)' }}>
                              {board.items.length > 0 &&
                                board.items.map((item, iIndex) => {
                                  return (
                                    <CardItem
                                      key={item.id}
                                      data={item}
                                      index={iIndex}
                                      oIndex={board.out}
                                      className="m-3"
                                      handleDelete={handleDelete}
                                      comms={item.feedback}
                                      handleComm={handleComm}
                                    />
                                  );
                                })}
                              {provided.placeholder}
                            </div>

                            {
                              showForm && selectedBoard === bIndex ? (
                                <div className="p-3">
                                  <textarea className="border-gray-300 rounded focus:ring-blue-400 w-full"
                                    rows={1} placeholder="Nome"
                                    data-id={bIndex}
                                    onKeyDown={(e) => onTextAreaKeyPress(e)} />
                                </div>
                              ) : (
                                <button
                                  className="flex justify-center items-center my-3 space-x-2 text-lg"
                                  onClick={() => { setSelectedBoard(bIndex); setShowForm(true); }}
                                >
                                  <span>NOVO LINK</span>
                                  <PlusCircleIcon className="w-5 h-5 text-gray-500" />
                                </button>
                              )
                            }
                          </div>
                        </div>
                      )}
                    </Droppable>
                  </div>
                );
              })}
            </div>
          </DragDropContext>
        )}
      </div>
    </Layout>
  );
}
