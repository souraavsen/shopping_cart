import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Reset from "./Components/Reset";
import Cards from "./Components/Cards";

const initial = [
  {
    id: 1,
    Name: "Desktop",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/Lenovo_4480A5U_ThinkCentre_M91p_Small_Desktop_793137.jpg",
    count: 0,
  },
  {
    id: 2,
    Name: "Watch",
    image:
      "https://s.yimg.com/aah/movadobaby/movado-museum-38mm-quartz-men-s-watch-2100005-33.jpg",
    count: 0,
  },
  {
    id: 3,
    Name: "Sun Glass",
    image:
      "https://n1.sdlcdn.com/imgs/c/m/p/Zyaden-Green-Aviator-Sunglasses-Com-SDL168543224-7-54715.jpg",
    count: 0,
  },
  {
    id: 4,
    Name: "ASUS",
    image:
      "https://1.bp.blogspot.com/-LYK8ZpqdrhE/Wk35sSMme-I/AAAAAAAAAJ0/HtVpTp38LHkVOHC5DFYdK3j1AKYaqJAswCLcBGAs/s1600/ASUS%2BA442UR-GA041T%2B1.jpeg",
    count: 0,
  },
  {
    id: 5,
    Name: "Laptop",
    image:
      "https://cdn.wccftech.com/wp-content/uploads/2019/09/Surface-Laptop.jpg",
    count: 0,
  },
];

function App() {
  const [cart, setCart] = useState(initial);
  const [total, setTotal] = useState([]);
  const [redo, setRedo] = useState([]);

  const add = (index) => {
    const addition = [...cart];
    addition[index].count++;
    setCart(addition);
    if (addition[index].count === 1) {
      setTotal([...total, addition[index]]);
    }
  };

  const sub = (index) => {
    const subs = [...cart];
    subs[index].count--;
    if (subs[index].count < 0) {
      subs[index].count = 0;
      setCart(subs);
    } else {
      setCart(subs);
    }
    if (subs[index].count === 0) {
      const sub = total.filter((item) => item.id !== subs[index].id);
      setTotal(sub);
    }
  };
 
  const onreset = () => {
    const products = cart.map((item) => {
      item.count = 0;
      return item;
    });
    setCart(products);
    setTotal([]);
  };

  const ondelete = (index) => {
    const reDo = [...cart].find((item) => item.id === cart[index].id);
    setRedo([...redo, reDo]);
    const updatedCart = [...cart].filter((item) => item.id !== cart[index].id);
    setCart(updatedCart);
    const updatedTotal = updatedCart.filter((item) => item.count > 0);
    setTotal(updatedTotal);
  };

  useEffect(() => {
    const updatedTotal = [...cart].filter((item) => item.count > 0);
    if (updatedTotal.length !== 0) {
      setTotal(updatedTotal);
    }
  }, [cart]);

  const reDo = () => {
    const getBack = [...cart, ...redo];
    setCart(getBack);
    setRedo([]);
  };

  return (
    <div className='App'>
      <Header total={total} />
      <Reset onreset={onreset} reDo={reDo} />
      {cart.map((product, index) => (
        <Cards
          key={index}
          index={index}
          product={product}
          onAdd={add}
          onSub={sub}
          ondelete={ondelete}
        />
      ))}
      {/* // <Count onAdd={add} Incart={cart} Items={Products} />; */}
    </div>
  );
}

export default App;
