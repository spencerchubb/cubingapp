export type ModalType = null | "choose alg set" | "edit alg set" | "edit alg";

/**
 * This function sets the modal state because modalOpen and modalType
 * are coupled to each other.
 */
export function updateModal(type: ModalType) {
    if (!type) {
        return {
            modalOpen: false,
            modalType: null,
        };
    }

    return {
        modalOpen: true,
        modalType: type,
    };
}