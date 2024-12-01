import toast from "react-hot-toast";

class Utils {
  handleError(err: any) {
    toast.error(err?.response?.data?.error ?? err?.message ?? "An error occurred");
  }

  wait(ms: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
}

const utils = new Utils();
export default utils;
