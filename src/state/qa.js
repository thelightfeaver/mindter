import { atom, selector } from "recoil";

export const questionarieState = atom({
  key: "questionarie",
  default: [],
});

export const positionState = atom({
    key:'position',
    default: 0
})

export const answerState = atom({
    key: 'answer',
    default:[]
})

export const questionarieSelector = selector({
  key:"questionarieValue",
  get: ({ get }) => {
    let res = get(questionarieState);
    let pos =  get(positionState)

    return res[pos];
  },
});
