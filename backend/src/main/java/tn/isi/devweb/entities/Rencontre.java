package tn.isi.devweb.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rencontre")
@Data

public class Rencontre implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Long id;

    @ManyToOne
    @JoinColumn(name = "id_match")
    private Match match;


    @ManyToOne
    @JoinColumn(name = "id_equipe1")
    private Equipe equipe1;

    @ManyToOne
    @JoinColumn(name = "id_equipe2")
    private Equipe equipe2;


    //@Column(name = "score")
    //private  int score;
    @Value("${some.key:0}")
    @Column(name = "but1")
    private  int but1;
    @Value("${some.key:0}")
    @Column(name = "but2")
    private  int but2;




}
