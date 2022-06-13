package tn.isi.devweb.entities;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "arbitre")
public class Arbitre {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Long id;

    @Column(name = "nom")
    private String nom;
    @Column(name = "pass")
    private Long pass;
    //@OneToMany(cascade = CascadeType.ALL, mappedBy = "arbitre")
    //private List<Match> match;


}
