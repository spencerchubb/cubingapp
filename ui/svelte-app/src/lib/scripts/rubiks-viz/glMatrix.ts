/**
 * This file contains matrix operations for webgl.
 */

/** Create and return an identity 4x4 matrix */
export function create() {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
    ];
}

/** Copy contents of `a` into `b` */
export function copy(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = a[12];
    b[13] = a[13];
    b[14] = a[14];
    b[15] = a[15];
    return b;
}

/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param out 4x4 frustum matrix that will be written to
 * @param fovy Vertical field of view in radians
 * @param aspect Aspect ratio. typically viewport width/height
 * @param near Near bound of the frustum
 * @param far Far bound of the frustum, can be null or Infinity
 */
export function perspective(out, fovy, aspect, near, far) {
    const f = 1.0 / Math.tan(fovy / 2);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;

    if (far != null && far !== Infinity) {
        const nf = 1 / (near - far);
        out[10] = (far + near) * nf;
        out[14] = 2 * far * near * nf;
    } else {
        out[10] = -1;
        out[14] = -2 * near;
    }
    return out;
}

/**
 * Rotate a 4x4 matrix
 *
 * @param out destination matrix
 * @param a matrix to rotate
 * @param rad angle to rotate the matrix by
 * @param axis axis to rotate around
 */
export function rotate(out, a, rad, axis) {
    let x = axis[0],
        y = axis[1],
        z = axis[2],
        len = 1 / Math.hypot(x, y, z);

    x *= len;
    y *= len;
    z *= len;

    let s = Math.sin(rad),
        c = Math.cos(rad),
        t = 1 - c,
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        b00 = x * x * t + c,
        b01 = y * x * t + z * s,
        b02 = z * x * t - y * s,
        b10 = x * y * t - z * s,
        b11 = y * y * t + c,
        b12 = z * y * t + x * s,
        b20 = x * z * t + y * s,
        b21 = y * z * t - x * s,
        b22 = z * z * t + c;

    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    // If the source and destination differ, copy the unchanged last row
    if (a !== out) {
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param m source and destination matrix
 * @param v vector to translate by
 */
export function translate(m, v) {
    let x = v[0],
        y = v[1],
        z = v[2];

    m[12] += m[0] * x + m[4] * y + m[7] * z;
    m[13] += m[1] * x + m[5] * y + m[8] * z;
    m[14] += m[2] * x + m[5] * y + m[9] * z;
    m[15] += m[3] * x + m[6] * y + m[10] * z;
    return m;
}