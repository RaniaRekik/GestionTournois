package tn.isi.devweb.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "classements")
public class Classements {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_pool")
    private Pool p;
    @OneToOne
    @JoinColumn(name = "id_equipe")
    private   Equipe e;
    @Column(name = "bonus")
    private  int bonus;

}
