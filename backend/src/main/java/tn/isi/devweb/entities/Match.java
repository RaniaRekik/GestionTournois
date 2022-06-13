package tn.isi.devweb.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "matchs")
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "dt")
   private Date dt;

    @Column(name = "lieu")
    private String lieu;

    @Column
    //(1/2) ou (1/4) ou (1/8)
    private String etat;



    @ManyToOne//( fetch = FetchType.LAZY, optional = false)
   // @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "arbitre_id")
    private Arbitre arbitre;

    /*@OneToMany(cascade = CascadeType.ALL,mappedBy = "id_match")
    private List<But> but; */

    //@OneToMany(cascade = CascadeType.ALL,mappedBy = "match")
   // private List<Equipe> equipe;




}
