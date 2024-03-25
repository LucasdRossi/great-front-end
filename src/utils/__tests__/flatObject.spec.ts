import { flatObject } from "../flatObject";

describe("flatObject utils specs", () => {
  const obj = {
    name: "John",
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA",
      location: {
        x: 20,
        y: 30,
      },
    },
    preferences: {
      color: "blue",
      food: "pizza",
    },
  };

  it("should flat a object", () => {
    const flattenedObject = flatObject(obj);

    expect(flattenedObject.street).toBe(obj.address.street);
    expect(flattenedObject.x).toBe(obj.address.location.x);
  });
});
