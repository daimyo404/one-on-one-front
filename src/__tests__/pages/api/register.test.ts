import handler from "pages/api/register";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

type ErrorResponse = {
  errorMessage: string;
};

describe("pages/api/register", () => {
  beforeAll(() => {
    const apiExecution = async (url: string, method: string, data: object) => {
      const options: Pick<AxiosRequestConfig, "url" | "method" | "data"> = {
        url: url,
        method: method,
        data: data,
      };

      await axios(options)
        .then(() => {
          undefined;
        })
        .catch((e: AxiosError<ErrorResponse>) => {
          return e.response ? e.response.data.errorMessage : "";
        });
    };
  });
});
describe("正常系", () => {
  it("true is truthy", () => {
    expect(true).toBe(true);
  });

  it("false is falsy", () => {
    expect(false).toBe(false);
  });
});
