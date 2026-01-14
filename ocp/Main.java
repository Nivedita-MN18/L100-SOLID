package SOLID.ocp;

public class Main {
    public static void main(String[] args) {
        PaymentService service = new PaymentService();

        PaymentMethod card = new CardPay();
        PaymentMethod upi = new UpiPay();

        service.pay(card, 1000);
        service.pay(upi, 500);
    }
}

