type RawData = {
  time: string;
  linear_acceleration_x: number;
  linear_acceleration_y: number;
  linear_acceleration_z: number;
  absolute_acceleration: number;
};

type ProcessedData = {
  time: number;
  distance: number;
  displacement: number;
  energy: number;
  velocity: number;
};

type ImuDataResult = {
  mass: number;
  repetitions: number;
  spent_time: number;
  total_distance: number;
  spent_energy: number;
  raw_data: RawData[];
  processed_data: ProcessedData[];
};

enum Noise {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export type {
  ImuDataResult,
  ProcessedData,
  RawData,
};

export {
  Noise,
};
