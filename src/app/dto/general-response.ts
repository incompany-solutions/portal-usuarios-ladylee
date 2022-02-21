export class GeneralResponseDto<T = any> {
    isSuccess: boolean = false;
    status: number;
    data: T;
    error: any;
    constructor() {
        this.data = null;
        this.error = null;
        this.status = null;
    }
}

export class GeneralResponseWithPagingDto<T = any> {
    isSuccess: boolean = false;
    status: number;
    data: {
        count: number,
        rows: T
    };
    error: any;
    constructor() {
        this.data = null;
        this.error = null;
        this.status = null;
    }
}