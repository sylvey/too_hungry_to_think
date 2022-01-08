import {TagsModel, RestaurantModel} from "./db";

const example = [
  {
    id: "1",
    title: "This is task1",
    content: "This is the task's content",
    status: "TODO",
    dueDate: new Date("2021-12-02T05:51:04.360Z").getTime(),
  },
  {
    id: "4",
    title: "This is task4",
    content: "This is the task's content",
    status: "TODO",
    dueDate: new Date("2021-12-02T05:51:04.360Z").getTime(),
  },
  {
    id: "2",
    title: "This is task2",
    content: "This is the task's content",
    status: "INPROGRESS",
    dueDate: new Date("2021-12-01T03:32:10.360Z").getTime(),
  },
  {
    id: "5",
    title: "This is task5",
    content: "This is the task's content",
    status: "INPROGRESS",
    dueDate: new Date("2021-12-01T03:32:10.360Z").getTime(),
  },
  {
    id: "3",
    title: "This is task3",
    content: "This is the task's content",
    status: "DONE",
    dueDate: new Date("2021-12-01T03:32:10.360Z").getTime(),
  },
  {
    id: "6",
    title: "This is task6",
    content: "This is the task's content",
    status: "DONE",
    dueDate: new Date("2021-12-01T03:32:10.360Z").getTime(),
  },
];

const dataInit = async () => {
  const checkData = await RestaurantModel.find();
  if (checkData.length !== 6 && process.env.EXAM === "true") {
    await RestaurantModel.deleteMany({});
    await RestaurantModel.insertMany(example);
    console.log("Database initialized!");
  }
};

export { dataInit };