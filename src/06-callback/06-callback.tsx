import React from "react";

// let callback = () => {
//   alert('hey');
// }
// window.setTimeout(callback, 1000)

export const User = () => {

  // const deleteUser = () => {
  //   alert('user have been deleted')
  // }

  const deleteUser = () => alert('deleted');
  const saveUser = () => alert('saved');

  const onNameChanged = () => {
    console.log("name changed")
  }

  return (
    <div>
      <textarea onChange={onNameChanged}>Dimych</textarea>
      <input/>
      <div onClick={deleteUser}>delete</div>
      <div onClick={saveUser}>save</div>
    </div>
  )
}