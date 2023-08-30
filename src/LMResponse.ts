interface LMResponse<T> {
  success: boolean;
  errorMessage?: string | null;
  data?: T | null;
}

export default LMResponse;
