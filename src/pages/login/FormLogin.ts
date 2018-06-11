class LoginViewModel {
  public UserId: string;
  public PessoaId: number;
  public Login: string;
  public Password: string;
  public Device: string;
  public Type: number;
  public Erros: string;
  public Name: string;
};
class SigninViewModel extends LoginViewModel
{
  public Email: string;
  public BirthDate: Date;
  public Cpf: string;
  public Peso: number;
  public Altura: number;
  public Sexo: string;
  public EstadoCivil: string;
};
