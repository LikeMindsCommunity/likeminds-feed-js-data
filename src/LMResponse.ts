interface LMResponseType<T> {
  success: boolean;
  errorMessage?: string | null;
  data?: T | null;
}

export default LMResponseType;
