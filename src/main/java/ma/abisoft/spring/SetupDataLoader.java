package ma.abisoft.spring;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import ma.abisoft.persistence.dao.PrivilegeRepository;
import ma.abisoft.persistence.dao.RoleRepository;
import ma.abisoft.persistence.dao.UserRepository;
import ma.abisoft.persistence.dao.heritage.RegionRepository;
import ma.abisoft.persistence.dao.heritage.VilleRepository;
import ma.abisoft.persistence.model.Privilege;
import ma.abisoft.persistence.model.Role;
import ma.abisoft.persistence.model.User;
import ma.abisoft.persistence.model.heritage.Region;
import ma.abisoft.persistence.model.heritage.Ville;

@Component
public class SetupDataLoader implements ApplicationListener<ContextRefreshedEvent> {

    private boolean alreadySetup = false;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PrivilegeRepository privilegeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RegionRepository regionRepository;
    
    
    @Autowired
    private VilleRepository villeRepository;
    // API
   
    @Override
    @Transactional
    public void onApplicationEvent(final ContextRefreshedEvent event) {
        if (alreadySetup) {
            return;
        }
        
        // == create initial privileges
        final Privilege readPrivilege = createPrivilegeIfNotFound("READ_PRIVILEGE");
        final Privilege writePrivilege = createPrivilegeIfNotFound("WRITE_PRIVILEGE");
        final Privilege passwordPrivilege = createPrivilegeIfNotFound("CHANGE_PASSWORD_PRIVILEGE");

        // == create initial roles
        final List<Privilege> adminPrivileges = new ArrayList<Privilege>(Arrays.asList(readPrivilege, writePrivilege, passwordPrivilege));
        final List<Privilege> userPrivileges = new ArrayList<Privilege>(Arrays.asList(readPrivilege, passwordPrivilege));
        final Role adminRole = createRoleIfNotFound("ROLE_ADMIN", adminPrivileges);
        final Role userRole = createRoleIfNotFound("ROLE_USER", userPrivileges);
        createRoleIfNotFound("ROLE_USER", userPrivileges);

        // == create initial user
        createUserIfNotFound("chakirfst@gmail.com", "لقمان", "شكير", "1234", new ArrayList<Role>(Arrays.asList(adminRole)));
        createUserIfNotFound("bencheikhi@yahoo.com", "ايوب", "بن الشيخي", "1234", new ArrayList<Role>(Arrays.asList(userRole)));
        createUserIfNotFound("el-idrissi@yahoo.com", "رجاء", "الادريسي", "1234", new ArrayList<Role>(Arrays.asList(userRole)));
        
        // create initial region
       Region r1=createRegionNotFound("جهة فاس مكناس");
       Region r2=createRegionNotFound("جهة الدار البيضاء سطات");
       Region r3=createRegionNotFound("جهة طنجة تطوان الحسيمة");
       Region r4=createRegionNotFound("جهة الشرق");
       Region r5=createRegionNotFound("جهة الرباط سلا القنيطرة");
       Region r6=createRegionNotFound("جهة بني ملال خنيفرة");
       Region r7=createRegionNotFound("جهة مراكش آسفي");
       Region r8=createRegionNotFound("جهة درعة تافيلالت");
       Region r9=createRegionNotFound("جهة سوس ماسة");
       Region r10=createRegionNotFound("جهة كلميم واد نون");
       Region r11=createRegionNotFound("جهة العيون الساقية الحمراء");
       Region r12=createRegionNotFound("جهة الداخلة وادي الذهب");
//        
//        
//        
//        //create initial ville
//        
        	createVilleNotFound("فاس",r1);
        	createVilleNotFound("مكناس",r1);
        	createVilleNotFound("إفران",r1);
        	createVilleNotFound("صفرو",r1);
        	createVilleNotFound("تاونات",r1);
        	createVilleNotFound("تازة",r1);
        	createVilleNotFound("بولمان",r1);
        	createVilleNotFound("الحاجب",r1);
        	createVilleNotFound("الحاجب",r1);
//        
//        
//       
       createVilleNotFound("الدار البيضاء",r2);
       createVilleNotFound("الجديدة",r2);
       createVilleNotFound("المحمدية",r2);
       createVilleNotFound("سطات",r2);
       createVilleNotFound("سطات",r2);
       createVilleNotFound("سطات",r2);
   
       
       
       createVilleNotFound("طنجة",r3);
       createVilleNotFound("تطوان",r3);
       createVilleNotFound("القصر الكبير",r3);
       createVilleNotFound("العرائش",r3);
       createVilleNotFound("الفنيدق",r3);
       
       createVilleNotFound("مارتيل",r3);
       createVilleNotFound("وزان",r3);
       createVilleNotFound("الحسيمة",r3);
       createVilleNotFound("المضيق",r3);
       createVilleNotFound("شفشاون",r3);
       
       createVilleNotFound("إمزورن",r3);
       createVilleNotFound("أصيلة",r3);
      
       
       
       createVilleNotFound("وجدة",r4);
       createVilleNotFound("بركان",r4);
       createVilleNotFound("جرسيف",r4);
       createVilleNotFound("الناظور",r4);
       createVilleNotFound("جرادة",r4);
       
       createVilleNotFound("فكيك",r4);
       createVilleNotFound("تاوريرت",r4);
       
       createVilleNotFound("سلا",r5);
       createVilleNotFound("الرباط",r5);
       createVilleNotFound("تمارة",r5);
       
       createVilleNotFound("القنيطرة",r5);
       createVilleNotFound("الخميسات",r5);
       createVilleNotFound("سيدي قاسم",r5);
       
       
       createVilleNotFound("مراكش",r7);
       createVilleNotFound("شيشاوة",r7);
       createVilleNotFound("قلعة السراغنة",r7);

       createVilleNotFound("الصويرة",r7);
       createVilleNotFound("آسفي",r7);
       createVilleNotFound("اليوسفية ",r7);
       
        alreadySetup = true;
    }
	@Transactional
	private final Ville createVilleNotFound(final String name,final Region r) {
		 Ville ville = villeRepository.findByCityName(name);
	        if ( ville  == null) {
	        	 ville  = new Ville(name);
	        	 ville.setRegion(r);
	        	 ville=villeRepository.save( ville );
	        	  
	        }
	       return ville;
		
	}
	@Transactional
	private final Region createRegionNotFound(final String name) {
		  Region region = regionRepository.findByNameRegion(name);
	        if ( region  == null) {
	        	 region  = new Region(name);
	        	 region  = regionRepository.save( region );
	        }
	        return region;
		
	}

	@Transactional
    private final Privilege createPrivilegeIfNotFound(final String name) {
        Privilege privilege = privilegeRepository.findByName(name);
        if (privilege == null) {
            privilege = new Privilege(name);
            privilege = privilegeRepository.save(privilege);
        }
        return privilege;
    }

    @Transactional
    private final Role createRoleIfNotFound(final String name, final Collection<Privilege> privileges) {
        Role role = roleRepository.findByName(name);
        if (role == null) {
            role = new Role(name);
        }
        role.setPrivileges(privileges);
        role = roleRepository.save(role);
        return role;
    }

    @Transactional
    private final User createUserIfNotFound(final String email, final String firstName, final String lastName, final String password, final Collection<Role> roles) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            user = new User();
            user.setFirstName(firstName);
            user.setLastName(lastName);
            user.setPassword(passwordEncoder.encode(password));
            user.setEmail(email);
            user.setEnabled(true);
        }
        user.setRoles(roles);
        user = userRepository.save(user);
        return user;
    }

}