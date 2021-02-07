export enum AlertPosition {
    Right = 0,
    Left = 1,
  }
  
  export type Alert = {
    id: string;
    title: string;
    message: string;
    duration: number | undefined;
    dismissible: boolean;
    position: AlertPosition;
    type: string;
  };
  
export enum AlertType {
    Success = 0,
    Info = 1,
    Warning = 2,
    Error = 3,
  }