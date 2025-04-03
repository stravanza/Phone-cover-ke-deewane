import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

// interface Profile {
//   name: string;
//   age: number;
//   height: number | string;
// }

type DefintionOptional<Type> = {
  [Index in keyof Type]?: Type[Index];
};
interface PartialDef {
  name: string;
  age: number;
}

// interface Ganesh extends Veera {
//   age: number;
// }

// interface Veera {
//   name: string | number;
// }

type Ganesh<Type> = {
  name: Type;
  age: Type;
};


const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  const name: number | string = 'Aditya';
  const arr: Array<number | string> = [23, 345];

  const calledFun = (arg: number): number | string => {
    console.log('THis is called function');
    return `6 * ${arg}`;
  };

  const conditionalString: Ganesh<number> = { name: 989, age: 39 };

  const customProfile: [string, number] = ['Aditya', 34];

  const userPartialDef: DefintionOptional<PartialDef> = {
    name: 'Aditya',
  };

  const user: {
    name: string;
    age: number;
    height: number | string;
  } = {
    name: 'Adity',
    age: 34,
    height: '180cm',
  };

  const calledGenericFunc = <Type extends number>(args: Type): Type => {
    console.log('Generic function call');
    const num: number = 4;
    return (num * args) as Type;
  };

  const genericFunc = calledGenericFunc<number>(24);
  const callingFunc = calledFun(30);

  console.log(
    name,
    user,
    arr,
    conditionalString,
    userPartialDef,
    callingFunc,
    genericFunc,
    customProfile,
    'asdjfoasdf'
  );
  return (
    <div
      className={cn(
        'h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
