export function* exampleSaga({ payload }) {
  try {
    yield console.log("hi");
  } catch (error) {
    console.log(error);
  }
}
