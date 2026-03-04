import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Submission {
    id: bigint;
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface backendInterface {
    getAllRequests(): Promise<Array<Submission>>;
    getRequest(id: bigint): Promise<Submission>;
    submitRequest(name: string, email: string, subject: string, message: string): Promise<bigint>;
}
