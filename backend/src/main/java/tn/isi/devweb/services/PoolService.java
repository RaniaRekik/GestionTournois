package tn.isi.devweb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.isi.devweb.entities.Arbitre;
import tn.isi.devweb.entities.Pool;
import tn.isi.devweb.repoisitory.PoolRepository;

import java.util.List;

@Service
public class PoolService {
    @Autowired
    private PoolRepository poolRepository;

    public void createPool(Pool p)
    {
        poolRepository.save(p);
    }

    public List<Pool> getallPool()
    {
        return  poolRepository.findAll();
    }

    //jdida
    public Pool updatePool(Pool pool) {
        return poolRepository.save(pool);
    }
//jdida
    public void deletePool(Long id)
    {
        poolRepository.deleteById(id);
    }
}
