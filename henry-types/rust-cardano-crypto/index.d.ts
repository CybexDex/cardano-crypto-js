declare module "rust-cardano-crypto" {
    export = rust_cardano_henry ;
} 

declare namespace rust_cardano_henry {


export const RustModule: {
};

export function loadRustModule(): any;

export namespace Blake2b {
    function blake2b_256(args: any): void;

}

export namespace Config {
    function defaultConfig(): any;

}

export namespace HdWallet {
    function addressGetPayload(args: any): void;

    function derivePrivate(args: any): void;

    function derivePublic(args: any): void;

    function fromSeed(args: any): void;

    function publicKeyToAddress(args: any): void;

    function sign(args: any): void;

    function toPublic(args: any): void;

}

export namespace PaperWallet {
    function scramble(args: any): void;

    function scrambleStrings(args: any): void;

    function unscramble(args: any): void;

    function unscrambleStrings(args: any): void;

}

export namespace Payload {
    function decrypt_derivation_path(args: any): void;

    function encrypt_derivation_path(args: any): void;

    function initialise(args: any): void;

}

export namespace Tx {
    function addInput(args: any): void;

    function addOutput(args: any): void;

    function create(args: any): void;

    function newTxIn(args: any): void;

    function newTxOut(args: any): void;

    function selectInputs(args: any): void;

    function sign(args: any): void;

    function verify(args: any): void;

}

}