import axios from "axios";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Components />
    </div>
  );
}

function Components() {
  const [id, setid] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [list, setList] = useState([]);

  const addid = (e) => {
    setid(e.target.value);
  };

  const addInput = (e) => {
    setusername(e.target.value);
  };

  const addPassword = (e) => {
    setpassword(e.target.value);
  };

  const submit = () => {
    const url = "http://localhost:5000/hello";
    const data = {
      id: id,
      username: username,
      password: password,
    };

    axios.post(url, data);
    const newList = [data, ...list];
    setList(newList);
    setid("");
    setusername("");
    setpassword("");
  };

  const getUser1 = async () => {
    const url = "http://localhost:5000/index";
    const result = await axios.get(url);

    const list = result.data;
    const newList = [...list];
    setList(newList);
  };

  return (
    <div>
      <div>
        <input type="text" value={id} onChange={addid} />
      </div>
      <div>
        <input type="text" value={username} onChange={addInput} />
      </div>
      <div>
        <input type="text" value={password} onChange={addPassword} />
      </div>
      <div>
        <button className="bg-success" onClick={submit}>
          click
        </button>
      </div>
      <div>
        {list.map((item, index) => (
          <div key={index} className="alert alert-secondary fs-4">
            {item.id}
            {item.username} {item.password}
          </div>
        ))}
      </div>
    </div>
  );
}
