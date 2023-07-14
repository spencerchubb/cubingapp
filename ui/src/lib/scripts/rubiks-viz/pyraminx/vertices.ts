const x = Math.sqrt(6) / 3;
const y = -1 / 3;
const zfront = Math.sqrt(1 - x * x - y * y);
const zback = Math.sqrt(1 - y * y);
export const vertex1: [number, number, number] = [x, y, zfront];
export const vertex2: [number, number, number] = [0, y, -zback];
export const vertex3: [number, number, number] = [-x, y, zfront];
export const vertex4: [number, number, number] = [0, 1, 0];

export const invVertex1: [number, number, number] = [-vertex1[0], -vertex1[1], -vertex1[2]];
export const invVertex2: [number, number, number] = [-vertex2[0], -vertex2[1], -vertex2[2]];
export const invVertex3: [number, number, number] = [-vertex3[0], -vertex3[1], -vertex3[2]];
export const invVertex4: [number, number, number] = [-vertex4[0], -vertex4[1], -vertex4[2]];