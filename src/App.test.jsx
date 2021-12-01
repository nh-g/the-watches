// NPM packages
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Project files
import mockProducts from "./data/mockProducts.json";
import mockImages from "./data/mockImages.json";
import { PRODUCTS_API_URL, IMAGES_API_URL } from "./scripts/fetchProducts.js";
import App from "./App";
import { StateProvider } from "./state/StateProvider";

const handlers = [
  rest.get(PRODUCTS_API_URL, (req, res, ctx) => {
    return res(ctx.json(mockProducts));
  }),
  rest.get(IMAGES_API_URL, (req, res, ctx) => {
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
  await waitFor(() =>
    expect(screen.getByText(/Fetching.../i)).toBeInTheDocument()
  );
});

test("Show products list after fetched APIs", async () => {
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
});

test("Show error messages when APIs return error", async () => {
  server.use(
    rest.get(PRODUCTS_API_URL, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(
    <StateProvider>
      <App />
    </StateProvider>
  );

  await waitFor(
    () =>
      expect(screen.getByText("We could not fetch products")).toBeInTheDocument
  );
});
