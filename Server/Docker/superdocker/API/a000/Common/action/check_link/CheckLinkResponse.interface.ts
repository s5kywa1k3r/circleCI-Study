export interface CheckLinkResponse {
    /** 성공여부
     * + 성공 시, true
     * + 실패 시, false
     */
    isSuccess: boolean;
    /** 실패시 에러 내용 */
    error?: string;
}
