export function login(user: string, password: string) {
  if (user !== password) throw new Error("Credenciais inválidas");
  
  return true;
}