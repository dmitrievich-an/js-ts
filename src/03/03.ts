import {StudentType} from "../02/02";
import {GovernmentBuildingType, HousesType} from "../02/02_02";

export const addSkill = (st: StudentType, skill: string) => {
  st.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export const makeIsActive = (s: StudentType) => {
  s.isActive = true;
}

export const doesStudentLeaveIn = (s: StudentType, c: string) => {
  return s.address.city.title === c;
}

export function addMoneyToBudget(object: GovernmentBuildingType, value: number) {
  object.budget += value;
}

export function repairHouse(house: HousesType) {
  house.repaired = true;
}

export const toFireStaff = (s: GovernmentBuildingType, v: number) => {
  s.staffCount -= v;
}

export const toHireStaff = (s: GovernmentBuildingType, v: number) => {
  s.staffCount += v;
}