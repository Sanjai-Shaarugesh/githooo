declare global {
	namespace App {
	  interface Locals {
		auth(): Promise<import('@auth/core').Session | null>;
	  }
	  interface PageData {
		session: import('@auth/core').Session | null;
	  }
	}
  }
  
  export {};