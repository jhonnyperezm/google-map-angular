export interface MarkerInterface {
  position: Position;
  label: Label;
  title: string;
  info: string;
  options: Options;
}

export interface Label {
  color: string;
  text: string;
}

export interface Options {
  animation: number;
}

export interface Position {
  lat: number;
  lng: number;
}
