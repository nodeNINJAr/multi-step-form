
export type FormData = {
    personal:{
        fullName:string;
        email:string;
        phoneNumber:string;

    };
    address: {
        streetAddress: string;
        city: string;
        zipCode: string;
      };
      account: {
        username: string;
        password: string;
        confirmPassword: string;
      };

}

export type FormStep = 'personal' | 'address' | 'account' | 'summary';