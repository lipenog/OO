package excecoes.exercicio1;

public class TesteExcecao {
    public static void main(String[] args) {
        try {
            for (int i = 0; i < 4; i++) {
                System.out.println("args[" + i + "]  = " + args[i]);
            }
        } catch(ArrayIndexOutOfBoundsException a) {
            System.out.println("Exceção capturada..: " + a.toString());
            System.out.println("A aplicações está sendo fechada");
        }
    }
}
