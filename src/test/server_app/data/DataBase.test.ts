import { DataBase } from "../../../app/server_app/data/DataBase";
import * as IdGenerator from "../../../app/server_app/data/IdGenerator";

type someTypeWithId = {
  id: string;
  name?: string;
  color?: string;
};

describe("DataBase test suite", () => {
  let sut: DataBase<someTypeWithId>;
  let fakeId: string;
  let insertedObject: someTypeWithId;

  beforeEach(() => {
    sut = new DataBase<someTypeWithId>();

    fakeId = "12345abc";
    jest.spyOn(IdGenerator, "generateRandomId").mockReturnValue(fakeId);

    insertedObject = {
      id: "",
      name: "someName",
      color: "someColor",
    };
  });

  it("should return id when insert", async () => {
    const actual = await sut.insert({ id: "" });
    expect(actual).toBe(fakeId);
  });

  it("should get element id when insert", async () => {
    const id = await sut.insert(insertedObject);
    const result = await sut.getBy("id", id);
    expect(result).toEqual(insertedObject);
  });

  it("should find all elements with same property value", async () => {
    const someObj1 = {
      id: "",
      name: "someName12131",
      color: "yellow",
    };
    const someObj2 = {
      id: "",
      name: "someName13121",
      color: "yellow",
    };
    await sut.insert(someObj1);
    await sut.insert(someObj2);
    const expected = [someObj1, someObj2];

    const actual = await sut.findAllBy("color", "yellow");
    expect(actual).toEqual(expected);
  });

  it("should update element property", async () => {
    const id = await sut.insert(insertedObject);
    const updatedName = "newName";
    await sut.update(id, "name", updatedName);
    const result = await sut.getBy("id", id);
    expect(result?.name).toBe(updatedName);
  });

  it("should delete element", async () => {
    const id = await sut.insert(insertedObject);
    await sut.delete(id);
    const result = await sut.getBy("id", id);
    expect(result).toBeUndefined();
  });

  it("should return all elements", async () => {
    const someObj1 = {
      id: "",
      name: "someName12131",
      color: "yellow",
    };
    const someObj2 = {
      id: "",
      name: "someName13121",
      color: "yellow",
    };
    await sut.insert(someObj1);
    await sut.insert(someObj2);
    const expected = [someObj1, someObj2];

    const actual = await sut.getAllElements();
    expect(actual).toEqual(expected);
  });
});
