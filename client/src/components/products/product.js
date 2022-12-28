import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adddata } from "../../Redux/action";
import Menu from "../menu_page/menu";

const Product = () => {
  const data = useSelector((state) => {
    return state.data;
  });
  console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    getMenuData();
  }, []);
  const getMenuData = () => {
    fetch("http://localhost:3002/domino_data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(adddata(data));
      });
  };

  return (
    <div>
      {/* {Object.keys(data).length > 0 ?
       data.pizza_mania.map((el)=>{
        return (
          <Cards props={el}/>
        )
       })
     : <h1>Data is empty</h1>} */}

      <Menu />
    </div>
  );
};

export default Product;
