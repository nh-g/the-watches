import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockProducts from "./data/mockProducts.json";
import mockImages from "./data/mockImages.json";

// Project files
import App from "./App";
import { StateProvider } from "./state/StateProvider";

const handlers = [
  rest.get("https://assignment.dwbt.tech/products", (req, res, ctx) => {
    return res(ctx.json(mockProducts));
  }),
  rest.get("https://assignment.dwbt.tech/images", (req, res, ctx) => {
    return res(ctx.json(mockImages));
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Show loading status when fetching API ", async () => {
  render(
    <StateProvider>
      <App />
    </StateProvider>
  );
  expect(screen.getByText(/Fetching.../i)).toBeInTheDocument();
});

test("show products list after fetching APIs", async () => {
  render(
    <StateProvider>
      <App />
    </StateProvider>
  );
  await waitFor(
    () =>
      expect(screen.getByTestId(`test-card-${mockProducts.products[0].sku}`))
        .toBeInTheDocument
  );
  //   expect(screen.getByText(/Fetching.../i)).toBeInTheDocument();
});

// test("handles server error", async () => {
//   server.use(
//     rest.get("/greeting", (req, res, ctx) => {
//       return res(ctx.status(500));
//     })
//   );

//   render(<Fetch url="/greeting" />);

//   fireEvent.click(screen.getByText("Load Greeting"));

//   await waitFor(() => screen.getByRole("alert"));

//   expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
//   expect(screen.getByRole("button")).not.toBeDisabled();
// });
