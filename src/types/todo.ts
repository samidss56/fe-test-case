export type TodoType = {
  id: number;
  title: string;
  description: string;
};

export enum TodoAction {
  MOVE_UP = 'MOVE_UP',
  MOVE_DOWN = 'MOVE_DOWN',
}
