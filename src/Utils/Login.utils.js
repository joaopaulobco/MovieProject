
export const saveId = (id) => {
    localStorage.setItem('userId', id);
}

export const getId = () => {
  return  localStorage.getItem('userId')
}


export const removeId = () => {
  localStorage.removeItem('userId')
}
