import React, { useState } from "react";
import Layout from "../layouts";
import IndexForm from "../components/indexform";
import ListItems from "../components/listitems";

const Index = () => {

  const [items, setItems] = useState([
  ]);

  console.log("Items", items)

  const onSubmit = (data) => {
    console.log("Data to be submitted:", data)
    // const a1 = items
    // a1.push(data)
    // setItems(a1)
    /**
     * a1 = [1,2,3]
     * a2 = [7]
     * b = 5
     * mergedArr= [a1, b, a2]   ==> [[1,2,3], 5, [7]]
     *            [...a1, b , ...a2] ==> [1,2,3, 5, 7]
     */

    // setItems((prevState)=>{
    //   return [
    //     data,
    //     ...prevState,
    //   ]
    // })
    setItems(prevItem =>([data, ...prevItem]))
  }

  return <Layout>
    <IndexForm onSubmit={onSubmit}/> 
    <ListItems list={items}/> {/** Passing props in component */}
  </Layout>;
};

export default Index;
