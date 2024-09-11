import axios from "axios";

const baseURL = "https://todo-backend-sample.onrender.com";

const getAllTodo = async (setToDo) => {
  try {
    await axios.get(`${baseURL}/api`).then(({ data }) => {
      console.log("data is:" + data);
      setToDo(data);
    });
  } catch (error) {
    console.log("Error fetching data", error);
  }
};

const saveTodo = async (text, setText, setToDo) => {
  try {
    await axios.post(`${baseURL}/api/save`, { text }).then((data) => {
      getAllTodo(setToDo);
      setText("");
      console.log(data);
    });
  } catch (error) {
    console.log("Error saving data", error);
  }
};

const updateTodo = async (text, setText, setIsUpdating, todoId, setTodo) => {
  try {
    await axios
      .post(`${baseURL}/api/update`, { _id: todoId, text })
      .then((data) => {
        setIsUpdating(false);
        setText("");
        getAllTodo(setTodo);
        console.log(data);
      });
  } catch (error) {
    console.log("Error updating data", error);
  }
};

const deleteTodo = async (todoId, setTodo) => {
  try {
    await axios.post(`${baseURL}/api/delete`, { _id: todoId }).then((data) => {
      getAllTodo(setTodo);
      console.log(data);
    });
  } catch (error) {}
};

export { getAllTodo, saveTodo, updateTodo, deleteTodo };
